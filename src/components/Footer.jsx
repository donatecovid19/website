import React from 'react';

function Footer() {
  return (
    <div className='footer'>
      <footer>
        Made with{' '}
        <span role='img' aria-label='heart'>
          &#129505;
        </span>{' '}
        by{' '}
        <a
          href='https://www.youtube.com/user/alohakatiex'
          rel='noopener noreferrer'
          target='_blank'
        >
          Katie Tracy
        </a>
        <p>
          Image Source:{' '}
          <a
            href='https://ls.graphics/'
            rel='noopener noreferrer'
            target='_blank'
          >
            Whoosh
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
