# Roman Twitter

[Demo](https://neilhsmith.github.io/roman-twitter/)

## Tools

- create-react-app
- typescript
- react-router
- react-query
- CSS Modules

## Notes

This was built in about 4 hours total. There's several things I'd improve, and still might (after the Super Bowl tonight), like better loading/error indicators, styling updates and some small refactors but I think this is good to show my understanding of React.

The Card component uses the Named Child pattern and is also extended with the CardLink component.

CommentList is a plain, dumb component that renders its list of Comments as semantically correct HTML. I'm a believer if YAGNI and since the CommentList only appears in one place on the app I didn't create a child Comment component.

GridLayout is a component which takes a list of ReactNodes and an optional title and renders the items either as 50% or 100% width columns. The layout style is persisted in local storage so that the user's preference is defaulted through route changes and reloads.

NewLineText is a simple component that breaks a string of text into paragraphs on newline characters (\n).

PostList renders a list of Posts with the GridLayout component but it uses the CardLink component so that each post is wrapped in a link.

The pages are straight-forward. They fetch their data and then pass it down to their children to be rendered. I do have some plans to improve the Post page. It currently displays 2 different loading indicators - one for the Post and a second for the comments. It also doesn't render the Post area until the post is fetched which makes the comments section move vertically once the post is finally rendered. These are things I'd improve with more time.

I've typically used styled-components in the past and figured this app is small enough to that trying out css modules wouldn't be an issue. I ended up repeating some styles in the Card and CardList components which feels a little wrong. Ultimately, I wish I went with a css-in-js solution.
