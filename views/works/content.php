<?php

$languageCode = Application::$app->config['language']['code'];

?>

<div class="portfolio">

    <?php include __DIR__ . '/header.php'; ?>

    <div class="works">
        <?php
        $i = 1;
        foreach (Application::$app->config['works'] as $i => $work) {

            echo '<a href="' . $work[1][$languageCode]['url'] . '" class="work">';
            echo '<span class="work-name work-name_' . ($i % 2 == 0 ? 'even' : 'odd') . '">' .
                $work[1][$languageCode]['navbarTitle'] . '</span>';
            echo '<video id="playerwork-' . $i . '-player" ' .
                'poster="' . $work[1][$languageCode]['posterImage'] .
                '" class="work__video" muted loop playsinline preload="metadata">';

            foreach ($work[1][$languageCode]['videoFiles'] as $videoFile) {
                echo '<source src="' . $videoFile['src'] . '" type="' . $videoFile['type'] . '">';
            }
            echo '</video>';

            echo '<div class="work-info">' . $work[1][$languageCode]['posterDescription'] . '</div>';
            echo '</a>';
            $i += 1;
        }
        ?>
    </div>

    <?php include __DIR__ . '/footer.php'; ?>

    <?php echo Application::$app->assetManager->js; ?>

</div>