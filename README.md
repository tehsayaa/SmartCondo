# Smart Condo Portal

This is the frontend application for the Smart Condo resident and management portal.

## Tech Stack

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Supabase

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

- Node.js (v18 or later)
- npm

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Environment Configuration

1.  **Create an environment file:**
    Create a new file named `.env` in the root of the project.

2.  **Add your Supabase credentials:**
    Open the `.env` file and add your Supabase project URL and anon key. You can find these in your Supabase project's API settings.

    ```
    VITE_SUPABASE_URL=your-supabase-url
    VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
    ```

### Running the Application

Once the dependencies are installed and the environment is configured, you can start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:8080`.

## Supabase Schema

The database schema is managed via migration files located in the `supabase/migrations` directory. To apply the schema to your Supabase project, you can use the Supabase CLI.
