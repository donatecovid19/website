import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function Navigation(props) {
  return (
    <div className='nav'>
      <header>
        <Link class='nav-link' to='/'>
          <img src='img/logo.png' alt='Logo Banner' />
        </Link>
        <p>
          <button>
            <Link class='nav-link' to='/'>
              home{' '}
              <span role='img' aria-label='house'>
                &#127968;
              </span>
            </Link>
          </button>
          <button>
            <Link class='nav-link' to='/ideas'>
              ideas?{' '}
              <span role='img' aria-label='light'>
                &#128161;
              </span>
            </Link>
          </button>
          <button>
            <Link class='nav-link' to='/form'>
              share a donation link!{' '}
              <span role='img' aria-label='globe'>
                &#127760;
              </span>
            </Link>
          </button>
        </p>
      </header>
    </div>
  );
}

export default withRouter(Navigation);
