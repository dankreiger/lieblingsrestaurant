import React from 'react';
import { Offline, Online } from 'react-detect-offline';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import * as actions from 'actions';
import { Col } from 'reactstrap';
import SimpleMap from 'components/SimpleMap/SimpleMap';
import { HomeContainer, OfflineMessageRow } from './Home.styles';
import classNames from 'classnames';
import { navigationTypes } from 'reducers/types/navigation.types';

const Home = ({ navigation }) => (
  <HomeContainer fluid className={classNames({ toggled: navigation.toggled })}>
    <Online>
      <SimpleMap />
    </Online>
    <Offline>
      <OfflineMessageRow>
        <Col>Please check your internet connection.</Col>
      </OfflineMessageRow>
    </Offline>
  </HomeContainer>
);

Home.propTypes = {
  ...navigationTypes,
  toggleNavigation: func
};

const mapStateToProps = ({ navigation }) => ({
  navigation
});

export default connect(
  mapStateToProps,
  actions
)(Home);
