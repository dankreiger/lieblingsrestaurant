import styled from 'styled-components';
import Geosuggest from 'react-geosuggest';
import { Popover } from 'reactstrap';
import {
  NAVIGATION_HEIGHT,
  DEFAULT_TRANSITION_DURATION
} from '../../constants';
import { DANGER_COLOR } from '../../constants/colorsConstants';

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
      ${({ invalidSelection }) =>
        invalidSelection ? DANGER_COLOR : 'transparent'};
    box-shadow: 0 0 1px #3d464d;
    padding: 0.5em 1em;
    transition: border 0.2s, box-shadow 0.2s;
  }
  .geosuggest__input:focus {
    border-color: #267dc0;
    box-shadow: 0 0 0 transparent;
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
  }
  .geosuggest__item:hover,
  .geosuggest__item:focus {
    background: #f5f5f5;
  }
  .geosuggest__item--active {
    background: #267dc0;
    color: #fff;
  }
  .geosuggest__item--active:hover,
  .geosuggest__item--active:focus {
    background: #ccc;
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

export const MapContainer = styled.div`
  height: calc(100vh - ${NAVIGATION_HEIGHT}px);
  width: 100vw;
  position: fixed;
  top: ${NAVIGATION_HEIGHT}px;
  z-index: -1;
  left: 0;
  transition: padding ${DEFAULT_TRANSITION_DURATION}ms;
  padding-left: ${props => (props.toggled ? '250px' : '0px')};
`;
