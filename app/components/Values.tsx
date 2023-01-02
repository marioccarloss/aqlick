export function Values () {
  const values = [{
    id: 0,
    name: 'Transparencia'
  }, {
    id: 1,
    name: 'Flexibilidad'
  }, {
    id: 2,
    name: 'Compromiso'
  }, {
    id: 3,
    name: 'Capacidad de respuesta'
  }, {
    id: 4,
    name: 'Solidaridad'
  }]

  return (
    <ul>
      {values.map(({ id, name }) => (
        <li key={id}>
          <span>{name}</span>
        </li>
      ))}
    </ul>
  )
}
