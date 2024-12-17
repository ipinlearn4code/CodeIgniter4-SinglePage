<!DOCTYPE html>
<html lang="en">
<?php
// List all variables available in the view
echo '<pre>';
print_r(get_defined_vars());
echo '</pre>';
?>

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <title><?= $title ?? 'Dashboard'; ?></title>
    <link href="<?= base_url('css/styles.css'); ?>" rel="stylesheet" />
    <link href="https://cdn.jsdelivr.net/npm/simple-datatables@7.1.2/dist/style.min.css" rel="stylesheet" />
    <script src="https://use.fontawesome.com/releases/v6.3.0/js/all.js" crossorigin="anonymous"></script>
</head>

<body class="sb-nav-fixed">
    <!-- Top Navigation -->
    <?= $this->include('layouts/topbar'); ?>

    <div id="layoutSidenav">
        <!-- Sidebar -->
        <?= $this->include('layouts/sidebar'); ?>

        <div id="layoutSidenav_content" class="flex-grow-1">
            <main class="p-4">
                <div id="content" class="container">
                    <?php
                    if (isset($content) && $content) {
                        echo view($content);
                    } else {
                        echo '<p>Content not found.</p>';
                    }
                    ?>
                </div>
            </main>
        </div>
    </div>

    <!-- Main Content -->

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        crossorigin="anonymous"></script>
    <script src="<?= base_url('js/scripts.js'); ?>"></script>
    <script src="https://cdn.jsdelivr.net/npm/simple-datatables@7.1.2/dist/umd/simple-datatables.min.js"
        crossorigin="anonymous"></script>
    <script src="<?= base_url('js/datatables-simple-demo.js'); ?>"></script>
</body>

</html>