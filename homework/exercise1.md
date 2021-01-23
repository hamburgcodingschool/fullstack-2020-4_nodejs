# Create a Website with Server Side Rendering
* Create a website consisting of 3 pages
	* Homepage -> `/`
	* About -> `/about`
	* Gallery -> `/gallery`

## General
1. All pages should have some css styling coming from an **external css file**

## Header
2. Make sure that all pages have a top navigation menu that allow you to navigate freely between them.
3. The header should have an `img` logo

## Content 
### Homepage
3. Add some content at will to the homepage

### About
4. Add some content at will to the about page

### Gallery
5. The gallery should contain a list of images based on a url query parameter named `type`
> Example:
> `?type=dogs` should display images of dogs
> `?type=cats` should display images of cats
> `?type=all` should display all the images
6. The absence of the `type` parameter should produce a message instead of a list of images
