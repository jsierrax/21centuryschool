import Link from 'next/link'

function Footer() {
    return (
        <div className="bg-purple-700 p-6 text-white">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <Link href='/cardanostarterkits'>
                  <a>
                    Cardano Starter Kits
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/dandelionapis'>
                  <a>
                    Dandelion APIs
                  </a>
                </Link>
              </li>
            </ul>
          </div>
    )
}

export default Footer
