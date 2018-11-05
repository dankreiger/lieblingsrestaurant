import styled from 'styled-components';

export const StarContainer = styled.div`
  &.stars {
    cursor: pointer;

    &:hover {
      .star polygon {
        fill: #ffd055 !important;
      }
    }

    .star {
      float: left;
      transition: transform 250ms;

      polygon {
        transition: fill 250ms;
        fill: #d8d8d8;
      }

      &:hover ~ .star {
        polygon {
          fill: #d8d8d8 !important;
        }
      }
      &:active ~ .star {
        transform: scale(0.9);
        polygon {
          fill: #c7c7c7 !important;
        }
      }
    }

    &[data-stars] {
      .star polygon {
        fill: #ffd055;
      }
    }

    &[data-stars='1'] {
      .star:nth-child(1) ~ .star polygon {
        fill: #d8d8d8;
      }
    }

    &[data-stars='2'] {
      .star:nth-child(2) ~ .star polygon {
        fill: #d8d8d8;
      }
    }

    &[data-stars='3'] {
      .star:nth-child(3) ~ .star polygon {
        fill: #d8d8d8;
      }
    }

    &[data-stars='4'] {
      .star:nth-child(4) ~ .star polygon {
        fill: #d8d8d8;
      }
    }

    &[data-stars='5'] {
      .star:nth-child(5) ~ .star polygon {
        fill: #d8d8d8;
      }
    }
  }
`;
