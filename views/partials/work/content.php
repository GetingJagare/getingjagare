<?php
$config = \app\helpers\config();
$languageCode = $config['language']['code'];
$works = $config['works'];
$workId = \app\helpers\view()->params['id'];
$work = isset($works[$workId - 1]) ? $works[$workId - 1] : null;

if (!$work) {

    header("HTTP/1.1 301 Moved Permanently");
    header("Location: /");

    exit;
}

?>

<?php
$languageSwitcherLabel = $config['language']['switcherLabel'];
$languageSwitcherUrl = $config['language']['switcherUrl'];
?>

<div class="d-flex flex-column h-100">

    <?php include "header.php"; ?>

    <div class="work single flex-grow-1">

        <div class="position-relative">
            <video id="work-player" poster="<?php echo $work[1][$languageCode]['posterImage']; ?>"
                   muted loop autoplay preload="metadata" class="work__video" playsinline>
                <?php
                foreach ($work[1][$languageCode]['videoFiles'] as $videoFile) {
                    echo '<source src="' . $videoFile['src'] . '" type="' . $videoFile['type'] . '">';
                }
                ?>
            </video>

            <div class="work__toolbar pl-3 position-absolute">
                <span class="d-inline-block mute-btn mute-btn_muted"></span>
            </div>
        </div>

        <h1 class="work-title"><?php echo $work[1][$languageCode]['pageTitle']; ?></h1>

        <?php if (!empty($work[1][$languageCode]['title'])) { ?>
            <div class="work-title work-title_sub"><?php echo $work[1][$languageCode]['title']; ?></div>
        <?php } ?>

        <?php if (!empty($work[1][$languageCode]['description'])) { ?>
            <p class="work-description"><?php echo $work[1][$languageCode]['description']; ?></p>
        <?php } ?>
    </div>

    <?php
    $copyright = $config['copyright'][$languageCode];
    ?>

    <?php include "footer.php"; ?>

</div>
