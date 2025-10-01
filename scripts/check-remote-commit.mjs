#!/usr/bin/env node
import { execSync } from 'node:child_process'
import process from 'node:process'

const [, , repoArg, branchArg] = process.argv
const repo = repoArg || 'iliawerner/delo'
const branch = branchArg || 'main'

function readGit(command) {
  return execSync(command, { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim()
}

const localSha = readGit('git rev-parse HEAD')
const localSummary = readGit('git show -s --format=%s HEAD')

let remoteJson
try {
  const response = await fetch(`https://api.github.com/repos/${repo}/commits/${branch}`, {
    headers: {
      'User-Agent': 'commit-check-script',
      Accept: 'application/vnd.github+json',
    },
  })

  if (!response.ok) {
    throw new Error(`fetch failed with status ${response.status}`)
  }

  remoteJson = await response.json()
} catch (error) {
  const fallback = readGit(
    `curl -fsSL -H "User-Agent: commit-check-script" -H "Accept: application/vnd.github+json" https://api.github.com/repos/${repo}/commits/${branch}`
  )

  remoteJson = JSON.parse(fallback)
}

const remoteData = remoteJson
const remoteSha = remoteData.sha
const remoteSummary = remoteData.commit?.message?.split('\n')[0] ?? 'unknown summary'

const matches = localSha === remoteSha

console.log(`Local HEAD:   ${localSha} — ${localSummary}`)
console.log(`Remote ${repo}#${branch}: ${remoteSha} — ${remoteSummary}`)
console.log(matches ? '\n✅ Local branch matches the remote.' : '\n⚠️ Local branch differs from the remote.')

if (!matches) {
  console.log('\nTip: push your local commits or check out the remote branch to inspect the difference.')
}
