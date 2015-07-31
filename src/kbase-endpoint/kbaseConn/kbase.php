<?php
	require_once('connect.php');
	
	header('content-type: application/json; charset=utf-8');
	header("access-control-allow-origin: *");
	
	$retType = null;
	if(isset($_GET['r'])){ $retType = $_GET["r"]; }
	else if(isset($_POST['r'])){ $retType = $_POST["r"]; }
	
	$tbName = Array();
	$findData = Array();
	$args = Array();
	
	switch ($retType){
		case "q":
			global $tbName;
			$tbName[] = "questions";
			break;
			
		case "qa":
			global $tbName;
			$tbName[] = "questions";
			$tbName[] = "answers";
			
		case "vc":
			global $tbName;
			$tbName[] = "questions";
	}
	
	//print_r(findData($tbName));
	if($retType != "vc"){
		$jsonData = findData($tbName);
		print_r(json_encode($jsonData));
	} else {
		setCount($tbName);
	}
	
?>