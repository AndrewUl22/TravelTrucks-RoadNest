"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { useState } from "react";
import styles from "./CatalogClient.module.css";
import { getCampers } from "@/services/campers";
import type { CampersFilters } from "@/types/camper";
import CamperCard from "@/components/CamperCard/CamperCard";
import Filters from "@/components/Filters/Filters";

const LIMIT = 4;

export function CatalogClient() {
  const [filters, setFilters] = useState<CampersFilters>({});

  const query = useInfiniteQuery({
    queryKey: ["campers", filters],
    initialPageParam: 1,
    queryFn: ({ pageParam }) => getCampers(filters, pageParam, LIMIT),
    getNextPageParam: (lastPage, pages) => {
      if (!lastPage) return undefined;

      const loaded = pages.flatMap((p) => p.campers).length;
      return loaded < lastPage.total ? pages.length + 1 : undefined;
    },
  });

  const campers = query.data?.pages.flatMap((page) => page.campers) ?? [];

  return (
    <section className={styles.catalog}>

      <aside className={styles.filters}>
        <Filters onApply={setFilters} isLoading={query.isPending} />
      </aside>
      <div className={styles.results}>
        {query.isPending && (
          <p className={styles.status}>Loading campers…</p>
        )}

        {query.isError && (
          <p className={styles.status}>
            Unable to load campers. Try again later.
          </p>
        )}

        {!query.isPending && !query.isError && (
          <p className={styles.status}>
            Found {query.data?.pages[0]?.total ?? 0} campers
          </p>
        )}
        <div className={styles.grid}>
          {campers.length === 0 && !query.isPending && (
            <p className={styles.status}>No campers found.</p>
          )}

          {campers.map((camper) => (
            <CamperCard key={camper.id} camper={camper} />
          ))}
        </div>

        {query.hasNextPage && (
          <button
            className={styles.more}
            onClick={() => query.fetchNextPage()}
            disabled={query.isFetchingNextPage}
          >
            {query.isFetchingNextPage ? "Loading…" : "Load more"}
          </button>
        )}
      </div>
    </section>
  );
}
