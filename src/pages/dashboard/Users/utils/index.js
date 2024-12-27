export const usersSummary = (users) => {
  const activeUsers = users?.filter(
    (user) => user?.status?.toLowerCase() == "active"
  );
  const deactivedUsers = users?.filter(
    (user) => user?.status?.toLowerCase() == "deactive"
  );
  const froozenUsers = users?.filter(
    (user) => user?.status?.toLowerCase() == "froozen"
  );

  return {
    all: {
      total: users?.length ?? 0,
      users: users,
    },
    active: {
      total: activeUsers?.length ?? 0,
      users: activeUsers,
    },
    froozen: {
      total: froozenUsers?.length ?? 0,
      users: froozenUsers,
    },
    deactived: {
      total: deactivedUsers?.length ?? 0,
      users: deactivedUsers,
    },
  };
};
