# API Testing Guide

## Test the Backend API

Server is running on: http://localhost:5000

### 1. Test Server Health
```powershell
Invoke-RestMethod -Uri "http://localhost:5000" -Method Get
```

### 2. Register a New User
```powershell
$body = @{
    name = "Md Mustak"
    email = "mdmustak@example.com"
    password = "password123"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:5000/api/auth/register" -Method Post -Body $body -ContentType "application/json"
```

### 3. Login User
```powershell
$body = @{
    email = "mdmustak@example.com"
    password = "password123"
} | ConvertTo-Json

$response = Invoke-RestMethod -Uri "http://localhost:5000/api/auth/login" -Method Post -Body $body -ContentType "application/json"
$token = $response.token
Write-Host "Token: $token"
```

### 4. Create a Post (Protected Route)
```powershell
$headers = @{
    "Authorization" = "Bearer $token"
    "Content-Type" = "application/json"
}

$body = @{
    content = "This is my first post on LinkedIn Clone!"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:5000/api/posts" -Method Post -Headers $headers -Body $body
```

### 5. Get All Posts
```powershell
Invoke-RestMethod -Uri "http://localhost:5000/api/posts" -Method Get
```

### 6. Like a Post
```powershell
# Replace POST_ID with actual post ID from step 5
$postId = "your_post_id_here"

$headers = @{
    "Authorization" = "Bearer $token"
}

Invoke-RestMethod -Uri "http://localhost:5000/api/posts/$postId/like" -Method Put -Headers $headers
```

### 7. Add Comment to Post
```powershell
$headers = @{
    "Authorization" = "Bearer $token"
    "Content-Type" = "application/json"
}

$body = @{
    text = "Great post! I totally agree."
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:5000/api/posts/$postId/comment" -Method Post -Headers $headers -Body $body
```

## Using Postman or Thunder Client (Recommended)

You can also test using VS Code extensions:
- Thunder Client
- REST Client
- Or download Postman

### Import these requests in Postman:

**Base URL:** `http://localhost:5000`

1. POST `/api/auth/register` - Register user
2. POST `/api/auth/login` - Login
3. GET `/api/auth/me` - Get current user (add Bearer token)
4. GET `/api/posts` - Get all posts
5. POST `/api/posts` - Create post (add Bearer token)
6. PUT `/api/posts/:id/like` - Like post (add Bearer token)
7. POST `/api/posts/:id/comment` - Add comment (add Bearer token)
