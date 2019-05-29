import React from 'react'

export function renderMainWorkout(workoutStr){
  const lines = workoutStr.split('\n')
  return lines.map((line, i) => {
    if (line.trim() === '') {
      return <p className='spacer' key={i}>{line}</p>
    } else {
      return <p key={i}>{line}</p>
    }
  })
}

export function firstName(full_name) {
  if (full_name) {
    return full_name.split(' ')[0]
  }
}