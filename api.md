# OAuth

Types:

- <code><a href="./src/resources/oauth.ts">OAuthExchangeTokenResponse</a></code>

Methods:

- <code title="get /oauth/authorize">client.oauth.<a href="./src/resources/oauth.ts">authorize</a>({ ...params }) -> void</code>
- <code title="post /oauth/deauthorize">client.oauth.<a href="./src/resources/oauth.ts">deauthorize</a>({ ...params }) -> void</code>
- <code title="post /oauth/token">client.oauth.<a href="./src/resources/oauth.ts">exchangeToken</a>({ ...params }) -> OAuthExchangeTokenResponse</code>

# Activities

Types:

- <code><a href="./src/resources/activities.ts">ActivitySummary</a></code>
- <code><a href="./src/resources/activities.ts">Pagination</a></code>
- <code><a href="./src/resources/activities.ts">ActivityRetrieveResponse</a></code>
- <code><a href="./src/resources/activities.ts">ActivityListResponse</a></code>

Methods:

- <code title="get /activities/{activityId}">client.activities.<a href="./src/resources/activities.ts">retrieve</a>(activityID) -> ActivityRetrieveResponse</code>
- <code title="get /activities">client.activities.<a href="./src/resources/activities.ts">list</a>({ ...params }) -> ActivityListResponse</code>
- <code title="get /activities/{activityId}/file">client.activities.<a href="./src/resources/activities.ts">retrieveFile</a>(activityID) -> Response</code>

# Routes

Types:

- <code><a href="./src/resources/routes/routes.ts">RouteSummary</a></code>
- <code><a href="./src/resources/routes/routes.ts">RouteListResponse</a></code>

Methods:

- <code title="get /routes">client.routes.<a href="./src/resources/routes/routes.ts">list</a>({ ...params }) -> RouteListResponse</code>
- <code title="delete /routes/{routeId}">client.routes.<a href="./src/resources/routes/routes.ts">delete</a>(routeID) -> void</code>

## File

Types:

- <code><a href="./src/resources/routes/file.ts">Route</a></code>

Methods:

- <code title="post /routes/file">client.routes.file.<a href="./src/resources/routes/file.ts">create</a>({ ...params }) -> Route</code>
- <code title="put /routes/{routeId}/file">client.routes.file.<a href="./src/resources/routes/file.ts">update</a>(routeID, { ...params }) -> Route</code>

# Workouts

Methods:

- <code title="delete /workouts/{workoutId}">client.workouts.<a href="./src/resources/workouts/workouts.ts">delete</a>(workoutID) -> void</code>

## File

Types:

- <code><a href="./src/resources/workouts/file.ts">Workout</a></code>

Methods:

- <code title="post /workouts/file">client.workouts.file.<a href="./src/resources/workouts/file.ts">create</a>({ ...params }) -> Workout</code>
- <code title="put /workouts/{workoutId}/file">client.workouts.file.<a href="./src/resources/workouts/file.ts">update</a>(workoutID, { ...params }) -> Workout</code>
