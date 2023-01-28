/** @jsxImportSource @emotion/react */

import { Container } from './styles';

interface PaginationProps {
  pages: number;
}

const Pagination = (props: PaginationProps) => {
  const { pages } = props;

  const generateArrayPages = () => {

  }

  return (
    <>
      <div css={Container}>
        <button data-kl-prev>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#B7AFCE">
            <path d="M10.6 12.71a.999.999 0 0 1 0-1.42l4.59-4.58a1 1 0 1 0-1.41-1.42L9.19 9.88a3 3 0 0 0 0 4.24l4.59 4.59a1 1 0 0 0 1.41-1.42l-4.59-4.58Z"></path>
          </svg>
        </button>
        <div data-kl-buttons>

        </div>
        <button data-kl-next>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#B7AFCE">
            <path d="m15.4 9.88-4.59-4.59A1 1 0 1 0 9.4 6.71l4.6 4.58a1.002 1.002 0 0 1 0 1.42l-4.6 4.58a1 1 0 0 0 1.41 1.42l4.59-4.59a3 3 0 0 0 0-4.24Z"></path>
          </svg>
        </button>
      </div>
    </>
  );

};

export default Pagination;
