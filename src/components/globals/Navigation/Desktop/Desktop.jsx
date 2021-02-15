import React from 'react'
import useSound from 'use-sound'

import { Link } from '@elements'
import oldGame from '../../../../audio/old-game.mp3'

export const Desktop = () => {
  const [play] = useSound(oldGame)

  return (
    <nav className="hidden text-sm sm:block">
      <Link
        to="/"
        className="ml-12 xl:ml-16"
        kind="link"
        activeClassName="text-blue"
        onClick={play}
      >
        about
      </Link>
      <Link
        to="/experience"
        className="ml-12 xl:ml-16"
        kind="link"
        activeClassName="text-blue"
        onClick={play}
      >
        experience
      </Link>
      <Link
        to="/work"
        className="ml-12 xl:ml-16"
        kind="link"
        activeClassName="text-blue"
        onClick={play}
      >
        work
      </Link>
      <a
        href="#contact"
        className="ml-12 font-semibold tracking-widest uppercase xl:ml-16"
        onClick={play}
      >
        contact
      </a>
    </nav>
  )
}