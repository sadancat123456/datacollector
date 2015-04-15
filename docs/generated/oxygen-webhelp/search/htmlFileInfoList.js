fil = new Array();
fil["0"]= "Administration/Administration_title.html@@@Administration@@@...";
fil["1"]= "Administration/DataCollectorAdministration.html@@@Data Collector Administration@@@You can view configuration properties, logs, and JVM metrics from the Administration menu. You can also shut down the Data Collector...";
fil["2"]= "Administration/RESTResponse.html@@@REST Response@@@You can view the REST response that the Data Collector console uses to generate displays. The REST response is JSON data that you can send to StreamSets client services to help troubleshoot issues...";
fil["3"]= "Administration/ShuttingDown.html@@@Shutting Down the Data Collector@@@Shut down and restart the Data Collector to apply changes to the Data Collector configuration file, environment configuration file, or user logins. Click Administration &gt; Shut Down . When...";
fil["4"]= "Administration/ViewingDCConfigs.html@@@Viewing Data Collector Configuration Properties@@@To view Data Collector configuration properties, click Administration &gt; Configuration . For details about the configuration properties or to edit the configuration file, see Configuring the Dat...";
fil["5"]= "Administration/ViewingJVMMetrics.html@@@Viewing JVM Metrics@@@The Data Collector provides JVM metrics for the Data Collector...";
fil["6"]= "Administration/ViewingLogData.html@@@Viewing Data Collector Logs@@@You can view and download log data. When you download log data, you can select the file to download. To view log data for the Data Collector , click Administration &gt; Logs . The console displays...";
fil["7"]= "Alerts/Alerts_title.html@@@Alerts@@@...";
fil["8"]= "Alerts/ConfiguringDataAlerts.html@@@Configuring a Data Rule@@@Create a data rule to view summary statistics and generate alerts based on the rule. In the Properties panel or Monitor panel, click the Data Rules tab, and then click the Add icon. In the Data Rule...";
fil["9"]= "Alerts/ConfiguringMetricAlerts.html@@@Configuring a Metric Alert@@@Create a metric alert to receive monitoring or email alerts based on metric rules. You can configure metric alerts when you configure or monitor a pipeline. You can edit or delete alerts when they are not active...";
fil["10"]= "Alerts/DataAlerts.html@@@Data Rules and Alerts@@@Data rules define the information that you want to see about the data that passes between stages. You can create data rules based on any link in the pipeline. You can also create alerts based on the data rules...";
fil["11"]= "Alerts/EmailforAlerts-Configuring.html@@@Configuring Email for Alerts@@@You can define the email addresses to receive metric and data alerts. When an alert triggers an email, the Data Collector sends an email to every address in the list...";
fil["12"]= "Alerts/MetricAlerts.html@@@Metric Alerts@@@Metric alerts are alerts based on pipeline and stage statistics, such as a high rate of error records or a batch of records taking too long to process...";
fil["13"]= "Alerts/MetricTypes.html@@@Metric Types@@@Metric alerts provide different types of alerts based on the metric type that you select. For example, when you select a counter type, you can create alerts based on the number of error records generated by a specific stage...";
fil["14"]= "Data_Preview/DataCollectorWindow-Preview.html@@@Data Collector Console - Preview Mode@@@When you preview data, the Preview panel uses different colors to represent different types of data. The Preview panel also uses colors, italics, and asterisks to highlight the field values and records that you have changed for testing...";
fil["15"]= "Data_Preview/DataPreview.html@@@Data Preview@@@You can edit preview data to view how a stage or group of stages processes the changed data. Edit preview data to test for data conditions that might not appear in data preview...";
fil["16"]= "Data_Preview/DataPreview_Title.html@@@Data Preview@@@...";
fil["17"]= "Data_Preview/PreviewingMultipleStages.html@@@Previewing Multiple Stages@@@You can preview data for a group of linked stages within a pipeline. You can also edit the preview data to see how the group processes your changes. Preview multiple stages to verify that the group processes data as expected...";
fil["18"]= "Data_Preview/PreviewingaSingleStage.html@@@Previewing a Single Stage@@@You can preview data for a single stage. In the Preview panel, you can drill down to review the values for each record to determine if the stage transforms data as expected. You can also edit the...";
fil["19"]= "Destinations/Cassandra.html@@@Cassandra@@@The Cassandra destination writes data to Cassandr...";
fil["20"]= "Destinations/Destinations-title.html@@@Destinations@@@...";
fil["21"]= "Destinations/Destinations_overview.html@@@Destinations@@@A destination stage represents the target for a pipeline. You can use one or more destinations in a pipeline...";
fil["22"]= "Destinations/Elasticsearch.html@@@Elasticsearch@@@The Elasticsearch destination writes data to an Elasticsearch cluster. The Elasticsearch destination writes each record to Elasticsearch as a document...";
fil["23"]= "Destinations/Error.html@@@Error@@@The Error destination passes records to the pipeline for error handling. Use the Error destination to send a stream of records to pipeline error handling...";
fil["24"]= "Destinations/HadoopFS.html@@@Hadoop FS@@@You can add custom Hadoop configuration properties to the Hadoop FS destination...";
fil["25"]= "Destinations/KProducer.html@@@Kafka Producer@@@You can add custom Kafka configuration properties to the Kafka Producer...";
fil["26"]= "Destinations/SDCRecordFiles.html@@@SDC Record Files@@@Configure the SDC Record File destination to write SDC Record files to a local file system...";
fil["27"]= "Destinations/Trash.html@@@Trash@@@The Trash destination discards records. Use the Trash destination as a visual representation of records discarded from the pipeline. Or, you might use the Trash destination during development as a temporary placeholder...";
fil["28"]= "Expression_Language/ExpressionLanguage_overview.html@@@Expression Language@@@Stage paths appear in error records. They indicate the path that a record took through the pipeline before becoming an error record...";
fil["29"]= "Expression_Language/ExpressionLanguage_title.html@@@Expression Language@@@...";
fil["30"]= "Expression_Language/Functions.html@@@Functions@@@Use string functions to transform string dat...";
fil["31"]= "Expression_Language/Literals.html@@@Literals@@@The expression language includes the following literals...";
fil["32"]= "Expression_Language/Operators.html@@@Operators@@@The precedence of operators highest to lowest, left to right is as follows...";
fil["33"]= "Expression_Language/ReservedWords.html@@@Reserved Words@@@The following words are reserved for the expression language and should not be used as identifiers...";
fil["34"]= "Getting_Started/DCollector_Window.html@@@Data Collector Console@@@The Data Collector console provides a user interface to configure pipelines, preview data, monitor pipelines, and view a snapshot...";
fil["35"]= "Getting_Started/GettingStarted_Title.html@@@Getting Started@@@...";
fil["36"]= "Getting_Started/LoggingIn_CreatingPipeline.html@@@Logging In and Creating a Pipeline@@@After you start the Data Collector, you can log in to the Data Collector console and create your first pipeline...";
fil["37"]= "Getting_Started/What_isa_DataCollector.html@@@What is a Data Collector?@@@Let s walk through it...";
fil["38"]= "Glossary/GlossaryOfTerms.html@@@Glossary of Terms@@@data alerts Alerts based on rules that gather information about the data that passes between two stages. destination A stage type used in a pipeline to represent where the Data Collector writes...";
fil["39"]= "Glossary/Glossary_title.html@@@Glossary@@@...";
fil["40"]= "Install_Config/DCConfig.html@@@Data Collector Configuration@@@You can edit the Data Collector configuration file, sdc.properties, to configure properties such as the host name and port number, the HTTP protocol, and account information for email alerts...";
fil["41"]= "Install_Config/DCEnvironmentConfig.html@@@Data Collector Environment Configuration@@@You can edit the Data Collector environment configuration file, sdc-env.sh, to configure Java options...";
fil["42"]= "Install_Config/Install_Config_title.html@@@Installation and Configuration@@@...";
fil["43"]= "Install_Config/InstallationAndConfig.html@@@Installation and Configuration@@@You can install the Data Collector to be started manually or to run as a service. After installation, you can optionally install additional stages, create additional users, and configure the Data Collector...";
fil["44"]= "Install_Config/InstallingAdditionalStages.html@@@Installing Additional Stages@@@You can install a new stage by untarring the stage library and copying files...";
fil["45"]= "Install_Config/UsersandRoles.html@@@Users and Roles@@@The Data Collector provides several roles and a default user account based on each role. For increased security, update the passwords for these accounts or create additional user accounts. A production deployment of the Data Collector should integrate with intranet authentication such as LDAP...";
fil["46"]= "Origins/Directory.html@@@Directory@@@Configure a Directory origin to read data from files in a directory...";
fil["47"]= "Origins/FileTail.html@@@File Tail@@@Configure a File Tail origin to read data as it is written to a file. You can read text or JSON dat...";
fil["48"]= "Origins/KConsumer.html@@@Kafka Consumer@@@Configure a Kafka Consumer to read data from a Kafka cluster...";
fil["49"]= "Origins/Origins_overview.html@@@Origins@@@You can preview raw source data when you configure an origin. Preview raw source data when reviewing the data might help with origin configuration...";
fil["50"]= "Origins/Origins_title.html@@@Origins@@@...";
fil["51"]= "Pipeline_Configuration/ConfiguringAPipeline.html@@@Configuring a Pipeline@@@Configure a pipeline to define the stream of data. After you configure the pipeline, you can start the pipeline...";
fil["52"]= "Pipeline_Configuration/DataCollectorWindow-Config.html@@@Data Collector Console - Edit Mode@@@The following image shows the Data Collector console when you configure a pipeline: Area / Icon Name Description 1 Pipeline canvas Displays the pipeline. Use to configure the pipeline data flow. 2...";
fil["53"]= "Pipeline_Configuration/DeliveryGuarantee.html@@@Delivery Guarantee@@@When you configure a pipeline, you define how you want data to be treated: Do you want to prevent the loss of data, or do you want to prevent the duplication of dat...";
fil["54"]= "Pipeline_Configuration/ErrorHandling.html@@@Error Handling@@@You can use a Directory origin in a error pipeline to reprocess error record files. When you reprocess error record files, do not edit or rename the files. The Directory origin expects the files as generated by the original pipeline...";
fil["55"]= "Pipeline_Configuration/PipelineConfiguration_title.html@@@Pipeline Configuration@@@...";
fil["56"]= "Pipeline_Configuration/PipelineDesign.html@@@Pipeline Design@@@A pipeline constant is a constant that you define for the pipeline, that you can use in any stage in the pipeline. Define a pipeline constant when you have a value that you want to be able to update easily, or that you want use more than once...";
fil["57"]= "Pipeline_Configuration/PipelineMemory.html@@@Pipeline Memory@@@The Data Collector uses memory when it runs a pipeline. To avoid causing out-of-memory errors on the host machine, you can configure the maximum amount of memory that can be used for the pipeline...";
fil["58"]= "Pipeline_Configuration/SDCRecordFormat.html@@@SDC Record Data Format@@@SDC Record is a data format used by the Data Collector to generate error record files for the pipeline. The Data Collector can also use the SDC Record format to generate output files...";
fil["59"]= "Pipeline_Configuration/Validation.html@@@Validation@@@The Data Collector console provides two types of validation...";
fil["60"]= "Pipeline_Configuration/What_isa_Pipeline.html@@@What is a Pipeline?@@@A pipeline describes the flow of data for the Data Collector...";
fil["61"]= "Pipeline_Maintenance/DeletingAPipeline.html@@@Deleting a Pipeline@@@You can delete a pipeline when you no longer need it. Deleting a pipeline is permanent. If you think you might want to archive a pipeline, you might export the pipeline before you delete it. In the...";
fil["62"]= "Pipeline_Maintenance/DuplicatingAPipeline.html@@@Duplicating a Pipeline@@@Duplicate a pipeline when you want to keep the existing version of a pipeline while continuing to configure a duplicate version. A duplicate is an exact copy of the original pipeline...";
fil["63"]= "Pipeline_Maintenance/ExportingAPipeline.html@@@Exporting a Pipeline@@@Export a pipeline when you want to use the pipeline with another Data Collector. You might also export pipelines to keep a backup...";
fil["64"]= "Pipeline_Maintenance/ImportingAPipeline.html@@@Importing a Pipeline@@@Import a pipeline to use a pipeline developed on a different Data Collector or to restore a backup file...";
fil["65"]= "Pipeline_Maintenance/PipelineMaintenance_title.html@@@Pipeline Maintenance@@@...";
fil["66"]= "Pipeline_Maintenance/StartingAPipeline.html@@@Starting a Pipeline@@@You can start a pipeline when it is valid. When you start a pipeline, the Data Collector runs the pipeline until you stop the pipeline or shut down the Data Collector...";
fil["67"]= "Pipeline_Maintenance/StoppingAPipeline.html@@@Stopping a Pipeline@@@Stop a pipeline when you want the Data Collector to stop processing data for the pipeline...";
fil["68"]= "Pipeline_Maintenance/ViewingtheRunHistory.html@@@Viewing the Run History@@@You can view a run summary for each run of the pipeline when you view the pipeline history...";
fil["69"]= "Pipeline_Monitoring/DataCollectorWindow-Monitor.html@@@Data Collector Console - Monitor Mode@@@In Monitor mode, you can use the Data Collector console to view data as it passes through the pipeline...";
fil["70"]= "Pipeline_Monitoring/PipelineMonitoring.html@@@Pipeline Monitoring@@@When the Data Collector runs a pipeline, you can view real-time statistics about the pipeline, examine a sample of the data being processed, and create rules and alerts...";
fil["71"]= "Pipeline_Monitoring/PipelineMonitoring_title.html@@@Pipeline Monitoring@@@...";
fil["72"]= "Pipeline_Monitoring/Snapshots.html@@@Snapshots@@@You can capture a snapshot of data as it passes through the pipeline. You can capture up to ten snapshots. You can review the snapshot data stage by stage or through a group of stages, like data preview. You can also delete snapshot dat...";
fil["73"]= "Pipeline_Monitoring/ViewingPipelineStageStatistics.html@@@Viewing Pipeline and Stage Statistics@@@When you monitor a pipeline, you can view real-time summary and error statistics for the pipeline and for stages in the pipeline...";
fil["74"]= "Processors/ConfiguringExpressionsConditions.html@@@Configuring Expressions and Conditions@@@When you use a field name in an expression, use the following syntax...";
fil["75"]= "Processors/Expression.html@@@Expression Evaluator@@@Configure an Expression Evaluator to perform calculations on records on a row-by-row basis...";
fil["76"]= "Processors/FieldConverter.html@@@Field Converter@@@Configure a Field Converter to convert the data type of a field...";
fil["77"]= "Processors/FieldHasher.html@@@Field Hasher@@@Configure a Field Hasher to encode sensitive dat...";
fil["78"]= "Processors/FieldMasker.html@@@Field Masker@@@Configure a Field Masker to mask sensitive dat...";
fil["79"]= "Processors/FieldRemover.html@@@Field Remover@@@Configure a Field Remover to remove unwanted fields from the pipeline...";
fil["80"]= "Processors/FieldSplitter.html@@@Field Splitter@@@The Field Splitter splits string data based on a separator character and passes the separated data to new fields. Use the Field Splitter to split complex string values into logical components...";
fil["81"]= "Processors/JSONParser.html@@@JSON Parser@@@Configure a JSON Parser to parse a JSON object in a String field...";
fil["82"]= "Processors/JavaScript.html@@@JavaScript Evaluator@@@The JavaScript Evaluator processes data based on custom JavaScript. Use the JavaScript processor to use JavaScript code to perform custom processing...";
fil["83"]= "Processors/Jython.html@@@Jython Evaluator@@@The Jython Evaluator processes data based on custom Jython code. Use the Jython Evaluator to incorporate custom Jython code in a pipeline. The Jython Evaluator supports Jython version 2.7...";
fil["84"]= "Processors/Processors_overview.html@@@Processors@@@At various points in a pipeline, you can use preview data to help select fields. Preview data displays when a pipeline is configured to a point where you can to perform a data preview...";
fil["85"]= "Processors/Processors_title.html@@@Processors@@@...";
fil["86"]= "Processors/RDeduplicator.html@@@Record Deduplicator@@@Use a Record Deduplicator to route or remove records with duplicate dat...";
fil["87"]= "Processors/StreamSelector.html@@@Stream Selector@@@When a record does not match any condition, the Stream Selector can use the error handling for unmatched records or you can configure a default stream that accepts the unmatched records...";
fil["88"]= "Processors/StreamSelector_Conditions.html@@@Configuring Conditions@@@Configure a condition for each stream of data that you want to route. The Stream Selector passes all data that matches the condition to the stream...";
fil["89"]= "Processors/ValueReplacer.html@@@Value Replacer@@@The Value Replacer replaces null values in a field with a constant. The Value Replacer can also replace existing values in a field with Nulls...";
fil["90"]= "Troubleshooting/Troubleshooting.html@@@Troubleshooting@@@Use the following tips to help you with the Data Collector. If you have suggestions for additional items, feel free to send them to docs@streamsets.com...";
fil["91"]= "Troubleshooting/Troubleshooting_title.html@@@Troubleshooting@@@...";
