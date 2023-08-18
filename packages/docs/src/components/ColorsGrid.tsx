import { colors } from '@ignite-ui/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  // object to array
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key} style={{ background: color, padding: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            color: getContrast(color, '#fff') < 3.5 ? '#000' : '#fff', // manages better contrast
          }}
        >
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      </div>
    )
  })
}
