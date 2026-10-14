-- PostgreSQL migration starter; not used by local SQLite demo.
CREATE TABLE users (
  id UUID PRIMARY KEY,
  roblox_username TEXT NOT NULL UNIQUE,
  age_confirmed_at TIMESTAMPTZ,
  verification_code_hash TEXT,
  verified_at TIMESTAMPTZ,
  demo_points BIGINT NOT NULL DEFAULT 1000 CHECK (demo_points >= 0),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE TABLE activity_log (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id),
  event_type TEXT NOT NULL,
  detail JSONB NOT NULL DEFAULT '{}'::jsonb,
  points_delta BIGINT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX activity_log_user_created_idx ON activity_log(user_id, created_at DESC);
