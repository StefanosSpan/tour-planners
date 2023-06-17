import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Header from './components/Header';
import ExploreSection from './components/ExploreSection';
import AboutUsSection from './components/VillaRentals';

Enzyme.configure({ adapter: new Adapter() });

test('header is rendered', () => {
  const wrapper = shallow(<Header />);
  const headerEl = wrapper.find('header');
  expect(headerEl.length).toBe(1);
});
test('explore section is rendered', () => {
  const wrapper = shallow(<ExploreSection />);
  const exploreEl = wrapper.find('#explore');
  expect(exploreEl.length).toBe(1);
});
test('about-us section is rendered', () => {
  const wrapper = shallow(<AboutUsSection />);
  const aboutUsEl = wrapper.find('#about-us');
  expect(aboutUsEl.length).toBe(1);
});
