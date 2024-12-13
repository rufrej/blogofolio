export function getInitials(username) {
  const initials = username
    ?.replace(/-|_/g, ' ')
    .split(' ')
    .map(item => item.charAt(0));

  return initials;
}
