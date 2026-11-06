# Xera Studios publishing

- Use the Xera Studios identity from `~/.gitconfig-xera`. Before each commit,
  verify both `git var GIT_AUTHOR_IDENT` and `git var GIT_COMMITTER_IDENT`.
- Use `git@github-xera:xera-studios/xera-studios.github.io.git` and set the
  repository-local `core.sshCommand` to `ssh -o IdentitiesOnly=yes`.
- Before pushing, run
  `ssh -T -o IdentitiesOnly=yes -o BatchMode=yes git@github-xera` and verify the
  greeting identifies `xera-studios`. A successful GitHub authentication normally
  exits with status 1 because shell access is unavailable.
- Do not infer SSH permissions from the default GitHub CLI account. Check the
  configured Xera SSH identity before reporting missing access.
- Do not create pull requests. Commit or merge directly into the existing
  default branch, `main`.
- Transfer reviewed content from another identity as a new Xera-authored commit;
  do not import unwanted author history through a cherry-pick or merge.
- Preserve unrelated local changes. Do not rewrite published history or
  force-push without explicit approval.
- Keep personal account names, emails and links out of new public site content.
