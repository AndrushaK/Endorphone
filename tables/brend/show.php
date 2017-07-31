<?php
include '../../config.php';
try {
	$db = new PDO ($data_base, $login_db, $password_db);
	} catch (PDOException $e) {
	exit;
	}
    	$db -> exec("SET NAMES UTF8");
    	$query = $db -> prepare("
    			SELECT brendId, name
    			FROM catalog_brend;"
    	);
    	$query -> execute();
    	$arr = $query -> fetchALL(PDO::FETCH_ASSOC);
		echo json_encode( $arr );
?>