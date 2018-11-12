import styled from 'styled-components';

export const FavoriteBadgeContainer = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
  .badge {
    width: 60px;
    fill: rgba(0, 0, 0, 0.4);
  }

  .badge text {
    font-size: 18px;
    fill: white;
  }
`;
