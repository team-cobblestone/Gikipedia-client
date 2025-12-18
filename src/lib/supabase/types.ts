export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      accidents: {
        Row: {
          content: string | null;
          created_at: string;
          description: string | null;
          id: string;
          occurred_at: string;
          title: string;
        };
        Insert: {
          content?: string | null;
          created_at?: string;
          description?: string | null;
          id?: string;
          occurred_at: string;
          title: string;
        };
        Update: {
          content?: string | null;
          created_at?: string;
          description?: string | null;
          id?: string;
          occurred_at?: string;
          title?: string;
        };
        Relationships: [];
      };
      clubs: {
        Row: {
          content: string | null;
          created_at: string;
          description: string | null;
          id: string;
          image_url: string | null;
          name: string;
        };
        Insert: {
          content?: string | null;
          created_at?: string;
          description?: string | null;
          id?: string;
          image_url?: string | null;
          name: string;
        };
        Update: {
          content?: string | null;
          created_at?: string;
          description?: string | null;
          id?: string;
          image_url?: string | null;
          name?: string;
        };
        Relationships: [];
      };
      students: {
        Row: {
          content: string | null;
          created_at: string;
          description: string | null;
          generation: number;
          id: string;
          image_url: string | null;
          name: string;
        };
        Insert: {
          content?: string | null;
          created_at?: string;
          description?: string | null;
          generation: number;
          id?: string;
          image_url?: string | null;
          name: string;
        };
        Update: {
          content?: string | null;
          created_at?: string;
          description?: string | null;
          generation?: number;
          id?: string;
          image_url?: string | null;
          name?: string;
        };
        Relationships: [];
      };
      teachers: {
        Row: {
          content: string | null;
          created_at: string;
          id: string;
          image_url: string | null;
          name: string;
          subject: string | null;
        };
        Insert: {
          content?: string | null;
          created_at?: string;
          id?: string;
          image_url?: string | null;
          name: string;
          subject?: string | null;
        };
        Update: {
          content?: string | null;
          created_at?: string;
          id?: string;
          image_url?: string | null;
          name?: string;
          subject?: string | null;
        };
        Relationships: [];
      };
      document_revisions: {
        Row: {
          change_summary: string | null;
          content: string;
          created_at: string;
          created_by: string | null;
          document_id: string;
          document_type: string;
          id: string;
          version: number;
        };
        Insert: {
          change_summary?: string | null;
          content: string;
          created_at?: string;
          created_by?: string | null;
          document_id: string;
          document_type: string;
          id?: string;
          version: number;
        };
        Update: {
          change_summary?: string | null;
          content?: string;
          created_at?: string;
          created_by?: string | null;
          document_id?: string;
          document_type?: string;
          id?: string;
          version?: number;
        };
        Relationships: [];
      };
    };
    Views: {
      recent_changes_view: {
        Row: {
          created_at: string;
          id: string;
          title: string;
          type: string;
        };
        Relationships: [];
      };
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};
