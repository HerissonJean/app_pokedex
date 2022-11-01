export function defineColor(type: string | undefined) {
  switch (type) {
    case 'normal':
      return '#A8A878'
    case 'fire':
      return '#F08030'
    case 'fighring':
      return '#C03528'
    case 'water':
      return '#6890F0'
    case 'flying':
      return '#A890F0'
    case 'grass':
      return '#78C850'
    case 'poison':
      return '#A14CA0'
    case 'eletric':
      return '#F8D036'
    case 'ground':
      return '#E0C068'

    case 'psychic':
      return '#F15687'

    case 'rock':
      return '#B8A038'

    case 'ice':
      return '#705848'

    case 'bug':
      return '#A8B82A'

    case 'dragon':
      return '#776BF8'

    case 'ghost':
      return '#705898'

    case 'dark':
      return '#705848'

    case 'steel':
      return '#B8B8D0'

    case 'fairy':
      return '#EE99AC'
  }
  return 4
}
