import React from 'react'
import "./layout.css"

export default function Layout() {
  return (
    <div className='body'>
        <nav>
            Nav
        </nav>
        <menu>
            <button>new</button>
            <button>reply</button>
            <button>forward</button>
            <button>mark unread</button>
            <button>trash</button>
        </menu>
        <section>
            <div className="email">email 1</div>
            <div className="email">email 2</div>
            <div className="email">email 3</div>
            <div className="email">email 5</div>
            <div className="email">email 6</div>
            <div className="email">email 7</div>
            <div className="email">email 8</div>
            <div className="email">email 9</div>
            <div className="email">email 10</div>
            <div className="email">email 11</div>
        </section>
        <main>
            email
        </main>
        <aside>
            additional information
        </aside>
    </div>
  )
}
