# TravelTrucks RoadNest

Independent Next.js + TypeScript implementation of the Campers assignment. It deliberately does not reuse the referenced repository's source code or component structure.

## Features

- Next.js App Router with separate Home, Catalog, Favorites, and camper-detail routes;
- TypeScript in all application code;
- `useInfiniteQuery` from TanStack Query for paginated catalog requests;
- API requests to `campers-api.goit.study`;
- catalog filtering by city, equipment, and vehicle form;
- pagination via **Load more**;
- camper details with a gallery and booking form;
- persisted favorites in `localStorage`;
- responsive layout and loading/error states.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

