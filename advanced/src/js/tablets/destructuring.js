export default function extractSpecialAttacks({ special }) {
  return special.map(({
    id, name, description = 'Описание недоступно', icon,
  }) => ({
    id,
    name,
    description,
    icon,
  }));
}
