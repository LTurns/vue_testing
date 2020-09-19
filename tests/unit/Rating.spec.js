import { shallowMount } from '@vue/test-utils';
import Rating from '@/components/Rating';

let wrapper = null; 

beforeEach(() => {
 wrapper = shallowMount(Rating, {
  propsData: {
   maxStars: 5, 
   initialGrade: 2
   // creating a prop for our active stars too. 
  }
  // create a prop of a number so we can always change the number - and so we don't need things to be hardcoded. 
 });
}); 

afterEach(() => {
 wrapper.destroy(); 
})

describe('Rating', () => {
 it("renders the stars", () => {
  const stars = wrapper.findAll(".star");
  // this finds all elements within the Rating component that have a class of star and puts it in a constant. 
  // We can then easily grab the length of these stars.
  expect(stars.length).toBe(5);
  // however, to make this test flexible instead of hardcoding, we can add the number as a prop.
 });

 it("renders the active stars", () => {
  const active = wrapper.findAll(".star.active");
  expect(active.length).toBe(2);
 });

 it("renders a summary", () => {
  const summary = wrapper.find(".summary");
  expect(summary.text()).toBe("2 of 5"); 
 })
});

