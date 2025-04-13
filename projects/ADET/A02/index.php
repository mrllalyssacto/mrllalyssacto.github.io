<?php

$page = "formal";
$cardColor = "";

if (isset($_GET['page'])) {
    $page = $_GET['page'];
    switch ($page) {
        case "formal":
            $page = "formal";
            $cardColor = "#E4E4A1";
            break;
        case "casual":
            $page = "casual";
            $cardColor = "#FF6C4D";
            break;
        case "sports":
            $page = "sports";
            $cardColor = "#2E8ECE";
            break;
        case "sandals":
            $page = "sandals";
            $cardColor = "#2CC36B";
            break;
        default:
            header("Location: ?page=formal");
            break;
    }
} else {
    header("Location: ?page=formal");
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ApakPH</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Anton+SC&display=swap" rel="stylesheet">
    <link rel="icon" href="../../../images/logo.png">

    <style>
        .navbar,
        .headerContent h1,
        .aboutContent,
        footer {
            font-family: 'Anton SC', sans-serif;
            font-weight: 500;

        }

        .body {
            font-family: sans-serif;
        }

        .navbar {
            position: fixed;
            top: 0;
            width: 100%;
            padding: 1rem 2rem;
            z-index: 1000;
        }

        .nav-link {
            color: black;
            text-decoration: none;
            font-weight: 500;
        }

        .nav-link:focus,
        .nav-link:active {
            text-decoration: underline;
        }

        /* homecontent */
        .header {
            padding: 80px 0 40px 0;
        }

        .headerContent h1,
        .headerContent p {
            margin-left: 30px;
        }

        .btn-dark {
            margin-left: 30px;
            border-radius: 50px;
            padding: 8px 16px;
            font-size: 15px;
            width: 100px;
        }

        .homeImg {
            margin-top: 40px;
            display: flex;
            justify-content: center;
        }

        .homeImg img {
            max-width: 60%;
            height: auto;

        }

        .card {
            width: 80%;
            margin: 0 auto;
            font-size: 0.95rem;
            text-align: center;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .customCard {
            background-color: <?php echo $cardColor ?>;
        }

        .card-img-top {
            max-width: 100%;
            height: 200px;
            border-radius: 1rem 1rem 0 0;
            object-fit: contain;
        }

        footer {
            padding: 20px 0;
            text-align: center;
            background-color: #ffffff;
            color: #000;
        }
    </style>
</head>

<body>
    <nav class="navbar navbar-expand-lg bg-body-tertiary shadow">
        <div class="container-fluid">
            <img src="images/shoeprint.png" alt="Navbar Logo" style="width: 35px; height: 30px;" />
            <a class="navbar-brand" href="index.php">ApakPh</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="?page=formal">Formal</a></li>
                    <li class="nav-item"><a class="nav-link" href="?page=casual">Casual</a></li>
                    <li class="nav-item"><a class="nav-link" href="?page=sports">Sports</a></li>
                    <li class="nav-item"><a class="nav-link" href="?page=sandals">Sandals</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="container-fluid p-0">
        <?php include("shared/" . $page . ".php"); ?>
    </div>


    <footer class="text-center py-4">
        <p>&copy; 2025 ApakPH. All rights reserved.</p>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous">
    </script>

</body>

</html>