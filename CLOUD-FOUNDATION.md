# Good Man / Life Story Studio — SUMOWEB foundation
The application remains in SumoSk/ToBeaGoodMan. The existing SUMOWEB project is jeqbyhzbpivscsduwkcj. No SMCITY data is used or changed.
- goodman_saves: owner-only, versioned game snapshots.
- studio_admins: explicit Auth user UUID allowlist; must be configured by a trusted project owner before deployment. No password or service key in this repository.
- studio_projects / studio_revisions: private draft snapshots and atomic optimistic revision saves, via studio_save_project.
- studio_published: public approved engine data only; not wired to game yet. Do not publish raw design graphs: the existing engine uses executable narrative factories and needs an explicit compiler/validator.
- Browser local saves use original keys; Cloud save is explicit; no Realtime, polling, or automatic upload.
- Static GitHub Pages code is inspectable. The browser gate is UX only; RLS is the security boundary.
- Cloud game saves are client-authored and must not be used as verified anti-cheat/leaderboard data.
- Before release: configure one verified studio administrator, run browser and CI tests, test account registration and recovery behavior in shared Auth, and verify the existing local save and Studio JSON workflow.
