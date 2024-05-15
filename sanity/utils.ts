interface BuildQueryParams {
  type: string;
  query: string;
  tags: string;
  page: number;
  perPage?: number;
}

export function buildQuery(params: BuildQueryParams) {
  const { type, query, tags, page = 1, perPage = 20 } = params;

  const conditions = [`*[_type=="${type}"`];

  if (query) conditions.push(`slug.current match "*${query}*"`);

  if (tags && tags !== "all") {
    conditions.push(`tags == "${tags}"`);
  }

  // Calculate pagination limits
  const offset = (page - 1) * perPage;
  const limit = perPage;

  return conditions.length > 1
    ? `${conditions[0]} && (${conditions
        .slice(1)
        .join(" && ")})][${offset}...${limit}]`
    : `${conditions[0]}][${offset}...${limit}]`;
}
