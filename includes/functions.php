<?php

$result = array();

function getData($conn, $project) {
    if (is_null($project)) {
        $sql = "SELECT * FROM gs";
    } else {
        $sql = "SELECT * FROM projects WHERE project_name = '$project'";
    }

    $runQuery = $conn->query($sql);

    while ($row = $runQuery->fetch_assoc()) {
        $result[] = $row;
    }

    return $result;
}