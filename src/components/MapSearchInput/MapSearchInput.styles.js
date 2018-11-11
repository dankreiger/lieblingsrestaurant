import styled from 'styled-components';
import Geosuggest from 'react-geosuggest';
import { Popover } from 'reactstrap';
import { DANGER_COLOR } from '../../constants';
import { ACTIVE_NAV_SHADOW, NAV_SHADOW } from '../../constants';

export const SearchInput = styled(Geosuggest)`
  &.geosuggest {
    font-size: 18px;
    font-size: 1rem;
    text-align: left;
    margin: 0 auto;
    width: 100vw;
    left: 0;
    position: absolute;
  }
  .geosuggest__suggests-wrapper {
    display: ${({ showSuggestions }) => (showSuggestions ? 'block' : 'none')};
  }
  .geosuggest__input {
    width: 100%;
    border: 2px solid
      ${({ errorExists }) => (errorExists ? DANGER_COLOR : 'transparent')};
    box-shadow: ${NAV_SHADOW};
    padding: 0.5em 1em;
    transition: border 0.2s, box-shadow 0.2s;
    &:focus {
      border-color: #267dc0;
      box-shadow: ${ACTIVE_NAV_SHADOW};
    }
    /* &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px white inset;
    } */
  }
  .geosuggest__suggests {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    max-height: 25em;
    padding: 0;
    margin-top: -1px;
    background: #fff;
    border: 2px solid #267dc0;
    border-top-width: 0;
    overflow-x: hidden;
    overflow-y: auto;
    list-style: none;
    z-index: 5;
    -webkit-transition: max-height 0.2s, border 0.2s;
    transition: max-height 0.2s, border 0.2s;
  }
  .geosuggest__suggests--hidden {
    max-height: 0;
    overflow: hidden;
    border-width: 0;
  }

  /**
 * A geosuggest item
 */
  .geosuggest__item {
    font-size: 18px;
    font-size: 1rem;
    padding: 0.5em 0.65em;
    cursor: pointer;
    &:hover,
    &:focus {
      background: #f5f5f5;
    }
  }
  .geosuggest__item--active {
    background: #267dc0;
    color: #fff;
    &:hover,
    &:focus {
      background: #ccc;
    }
  }

  .geosuggest__item__matched-text {
    font-weight: bold;
  }
`;

export const StyledPopover = styled(Popover)`
  .popover-inner {
    border: 1px solid ${DANGER_COLOR};
  }
  .arrow {
    &:before {
      border-bottom-color: ${DANGER_COLOR} !important;
    }
  }
`;
