/** @jsxImportSource @emotion/react */
import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

interface HeaderItemProps {
  title: string;
  url: string;
}

interface HeaderProps {
  items: HeaderItemProps[];
}

const Header = (props: HeaderProps) => {
  const { items } = props;
  const [expand, setExpand] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  const handleClickOutside = useCallback(
    (e: any) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        if (expand) setExpand(false);
      }
    },
    [expand]
  );

  useEffect(() => {
    if (expand) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [expand, handleClickOutside]);

  return (
    <header
      ref={containerRef}
      css={Container}
      data-expand={expand ? true : undefined}
    >
      <div data-kl-main>
        <span data-kl-logo>Klontong</span>
        <button data-kl-menu type="button" onClick={() => setExpand(!expand)}>
          <span />
          <span />
        </button>
      </div>
      <nav data-kl-nav>
        {items.length &&
          items.map((item) => <Link to={item.url}>{item.title}</Link>)}
      </nav>
    </header>
  );
};

export default Header;
