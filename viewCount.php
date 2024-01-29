<?php
// File: viewcount.php

// Function to retrieve view count from a file
function getViewCount() {
    $count = @file_get_contents('viewcount.txt');
    return $count !== false ? (int)$count : 0;
}

// Function to increment view count
function incrementViewCount() {
    $count = getViewCount();
    $count++;
    file_put_contents('viewcount.txt', $count);
}

// Increment view count if requested
if (isset($_GET['increment'])) {
    incrementViewCount();
    echo "View count incremented!";
} else {
    // Return the view count
    echo "View count: " . getViewCount();
}
?>
