This is just a little POC I created which uses Redux to create a React component of a generic modal container that can be used in a sustainable manner to accept specific modal components.

## Why?
At its simplest, it's pretty easy to add a modal component to your React application. You just create a component as you normally would, give it a flag prop like `isOpen` to control whether the content gets rendered, and then add a click event to some button on the outer scope which controls/toggles the value of `isOpen`. Plop the modal component somewhere on that outer scope with `isOpen` passed into its props, throw a little CSS at it, and bada bing, you're good to go.

But say you've got more than one modal to show on a given page. Then you're looking at multiple modal components stacked up in your parent component, as well as multiple different methods/variables to control whether each one is open. This isn't a travesty with, say, two modals, but it is not very sustainable if you have an application with a lot of them, and in general, it generally just feels gross.

This is a good reason to use Redux. I plopped a single, generic modal component, `ModalRoot` on the outer scope, which is completely agnostic to the content therein - it's just a shell for whatever modal we want to show. The currently-open modal is set to a value in the Redux store - an object with properties for its type (string) and props (object). The value is `null` by default (no modal is open on page load), but a single `openModal()` method on the outer scope takes a modal type (string) and props (object) as arguments, and those values are in turn dispatched to the store. The `ModalRoot` component's state is listening to the corresponding value in the store, and will update accordingly, changing the component it renders (and its props) based upon the value in the store. You can put buttons on the outer scope with their onClick events set to a function that calls `openModal()`, passing in the modal name and props that it needs, and the store and `ModalRoot` will handle the rest.

## Installation/Starting the app
- Clone the repo
- `npm i`
- `npm start` (This is just a `create-react-app` application)
- Go to `localhost:3000` to see this sweet, sweet UI.

## This isn't a sweet sweet UI...
Yeah, I know. Like I said, it's just a POC, and it was mostly just for me to have a bare-bones reference for this type of flow. This is a challenge I assume many people using React will have (I did), and this is a nice and easy solution using modern tools. It also helped me conceptualize Redux a little better.
