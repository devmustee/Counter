Debugging Steps

Started the app and opened React DevTools
I first ran the counter React app in my browser and then opened the React Developer Tools extension. From there, I switched to the React tab so I could see the component tree and check the props/state of each component.

Looked at the component structure
The tree showed App at the top with two children: Counter and UserProfile. That looked correct, so I expanded both components to check what values were being passed down.

Checked the state inside App
In DevTools, I clicked on App and saw the state object:

{ name: "Alice", age: 25 }


So far, everything looked fine.

Inspected Counter
I clicked on the Counter component and confirmed that its prop initialCount was 0 and the internal state (count) was also 0. Pressing the button updated the value as expected, so no issues there.

Inspected UserProfile
Then I looked at the UserProfile component. In the props panel, I saw that user was being passed in correctly as:

{ name: "Alice", age: 25 }


But in the actual UI, the name showed up as “undefined” while the age displayed fine. This was clearly the problem.

Tracked down the mismatch
I opened the UserProfile.js file and noticed the code was using user.username instead of user.name. Since the App component was passing name, not username, that explained the undefined value.

Fixed the code
I changed the line from:

<p>Name: {user.username}</p>


to:

<p>Name: {user.name}</p>


Tested again
After saving, I reloaded the app and checked DevTools again. Now the UI correctly showed:

Name: Alice
Age: 25


No more undefined values, and everything else still worked fine.

That was the whole debugging process: start with DevTools, check the state, inspect props, notice the mismatch, and then fix it in the component.