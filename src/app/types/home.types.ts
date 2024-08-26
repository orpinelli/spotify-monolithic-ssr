export type PlaylistProps = {
    collaborative: boolean;
    description: string;
    external_urls: {
      spotify: string;
    };
    followers: {
      href: string | null;
      total: number;
    };
    href: string;
    id: string;
    images: Array<{
      height: number | null;
      url: string;
      width: number | null;
    }>;
    name: string;
    owner: {
      display_name: string;
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      type: string;
      uri: string;
    };
    primary_color: string | null;
    public: boolean;
    snapshot_id: string;
    tracks: {
      href: string;
      items: Array<{
        added_at: string;
        added_by: {
          external_urls: {
            spotify: string;
          };
          href: string;
          id: string;
          type: string;
          uri: string;
        };
        is_local: boolean;
        primary_color: string | null;
        track: {
          preview_url: string | null;
          available_markets: string[];
          explicit: boolean;
          type: string;
          episode: boolean;
          track: boolean;
          album: {
            available_markets: string[];
            type: string;
            album_type: string;
            href: string;
            id: string;
            images: Array<{
              url: string;
              width: number;
              height: number;
            }>;
            name: string;
            release_date: string;
            release_date_precision: string;
            uri: string;
            artists: Array<{
              external_urls: {
                spotify: string;
              };
              href: string;
              id: string;
              name: string;
              type: string;
              uri: string;
            }>;
            external_urls: {
              spotify: string;
            };
            total_tracks: number;
          };
          artists: Array<{
            external_urls: {
              spotify: string;
            };
            href: string;
            id: string;
            name: string;
            type: string;
            uri: string;
          }>;
          disc_number: number;
          track_number: number;
          duration_ms: number;
          external_ids: {
            isrc: string;
          };
          external_urls: {
            spotify: string;
          };
          href: string;
          id: string;
          name: string;
          popularity: number;
          uri: string;
          is_local: boolean;
        };
        video_thumbnail: {
          url: string | null;
        };
      }>;
      limit: number;
      next: string | null;
      offset: number;
      previous: string | null;
      total: number;
    };
    type: string;
    uri: string;
  }
  

  export type SpotifyAlbumResponse ={
    albums: Album[];
  }
  
  interface Album {
    album_type: string;
    total_tracks: number;
    available_markets: string[];
    external_urls: ExternalUrls;
    href: string;
    id: string;
    images: Image[];
    name: string;
    release_date: string;
    release_date_precision: string;
    restrictions?: Restrictions;
    type: string;
    uri: string;
    artists: Artist[];
    tracks: Tracks;
    copyrights: Copyright[];
    external_ids: ExternalIds;
    genres: string[];
    label: string;
    popularity: number;
  }
  
  interface ExternalUrls {
    spotify: string;
  }
  
  interface Image {
    url: string;
    height: number;
    width: number;
  }
  
  interface Restrictions {
    reason: string;
  }
  
  interface Artist {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }
  
  interface Tracks {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    items: Track[];
  }
  
  interface Track {
    artists: Artist[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_urls: ExternalUrls;
    href: string;
    id: string;
    is_playable: boolean;
    linked_from?: LinkedFrom;
    restrictions?: Restrictions;
    name: string;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
    is_local: boolean;
  }
  
  interface LinkedFrom {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    type: string;
    uri: string;
  }
  
  interface Copyright {
    text: string;
    type: string;
  }
  
  interface ExternalIds {
    isrc: string;
    ean: string;
    upc: string;
  }
  

  export interface SpotifyArtist {
    external_urls: {
      spotify: string;
    };
    followers: {
      href: string | null;
      total: number;
    };
    genres: string[];
    href: string;
    id: string;
    images: {
      url: string;
      height: number;
      width: number;
    }[];
    name: string;
    popularity: number;
    type: string;
    uri: string;
  }
  
  interface SpotifyArtistsResponse {
    artists: SpotifyArtist[];
  }
  