export type ClubType = {
  common_name: string;
  country: Country;
  crest?: string | null;
  external_id_dbu?: string | null;
  header_image?: string | null;
  id: string;
  match_count: Number;
  name: string;
  permissions?: {};
  short_name: string;
  slug: string;
  team_count: Number;
  title: string;
  url: string;
  is_following: Boolean;
  is_club_admin: Boolean;
};

export type TeamType = {
  id: string;
  match_count: number;
  member_count: number;
  user_member?: string;
  name: string;
  permissions: {};
  slug: string;
  image: string;
  url: string;
  gender?: string;
  club: ClubType;
  header_image: string;
};

export type MatchType = {
  created: string;
  id: number;
  identifier: string;
  slug: string;
  camera: string;
  club: ClubType;
  duration: number;
  end: number;
  sport: string;
  start: string;
  team: TeamType;
  thumbnail: string;
  title: string;
  url: string;
  view_count: number;
};

type Country = {
  code: string;
  name: string;
};
