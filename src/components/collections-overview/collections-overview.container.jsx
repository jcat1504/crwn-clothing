import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.collections';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
})

const CollectionsOverviewContainer = compose(connect(mapStateToProps),
WithSpinner)
(CollectionsOverview)
//essentially carrying all of our functions together
//compose evaluates from right to left
//passing in collections overview to with spinner and then passing that to mapstatetoprops

export default CollectionsOverviewContainer