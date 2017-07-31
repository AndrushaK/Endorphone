<?php
include '../../config.php';
$brend_id=$_GET['brend_id'];
try {
	$db = new PDO ($data_base, $login_db, $password_db);
	} catch (PDOException $e) {
	exit;
	}
    	$db -> exec("SET NAMES UTF8");
    	$query = $db -> prepare("
    			SELECT deviceID, name
    			FROM catalog_device 
    			WHERE brendID=$brend_id;"
    	);
    	$query -> execute();
    	$arr = $query -> fetchALL(PDO::FETCH_ASSOC);
		echo json_encode( $arr );
?>