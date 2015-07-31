<?php
	require_once('kbc.php');
	
	//define("SERVERNAME", "server");
	//define("USERNAME", "username");
	//define("PASSWORD", "pass");
	//define("DBNAME", "db");
	
	$mysqlConn = new mysqli(SERVERNAME,USERNAME,PASSWORD,DBNAME);
	$jsonData;
	
	$quesID = null;
	if(isset($_GET['qid'])){ $quesID = $_GET["qid"]; }
	else if(isset($_POST['qid'])){ $quesID = $_POST["qid"]; }
	
	/* check connection */
	if (mysqli_connect_errno()) {
		printf("Connect failed: %s\n", mysqli_connect_error());
		exit();
	}

	function setCount($table=null){
		global $mysqlConn;
		global $quesID;
		
		if(!is_null($table)){
			$query = "";
			
			foreach ($table as $tableName){
				$query = "UPDATE questions SET views=views+1 WHERE questionid=" . $quesID;
				$result = mysqli_query($mysqlConn, $query);
			}
		}
	}

	function findData($table=null,$args=null){		
		global $mysqlConn;

		if(!is_null($table)){
			$tableAr = Array();
			$query = "";
			
			foreach ($table as $tableName){
				$query = "SELECT * FROM " . $tableName;
				
				if(isset($_GET["qid"])){
					$quesId = $_GET["qid"];
					$query.= " WHERE questionid=" . $quesId;
				}
				
				$result = "";
				$rows = [];
				
				if ($result = $mysqlConn->query($query)) {
					/* fetch object array */
					while ($row = $result->fetch_array(MYSQLI_ASSOC)){
						$rows[] = $row;
					}

					/* free result set */
					$result->close();
				}
				
				$tableAr[$tableName] = $rows;
			}
			
			return $tableAr;
		}
		
		closeConn();
	}
	
	function procArgs($args){
		return $this;
	}
	
	function closeConn(){
		$mysqlConn->close();
	}
?>