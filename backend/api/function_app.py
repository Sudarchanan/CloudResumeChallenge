import json
import azure.functions as func
from azure.data.tables import TableServiceClient


app = func.FunctionApp(http_auth_level=func.AuthLevel.ANONYMOUS)

@app.route(route="main")


def main(req: func.HttpRequest) -> func.HttpResponse:

   # connection_string 
    connection_string = "DefaultEndpointsProtocol=https;AccountName=resumechallengedb;AccountKey=AMzD3S3GI81ReZrvy9ZpSxAKcD7lYNEOpuYbUw2PmPn3lIn8DwHnHG9W2QG2fHHEBLRrTVEodQ8cACDb7e6jMQ==;TableEndpoint=https://resumechallengedb.table.cosmos.azure.com:443/;"
    table_service_client = TableServiceClient.from_connection_string(connection_string)

    # Get the TableClient for the specific table
    table_name = "countertable"
    table_client = table_service_client.get_table_client(table_name)
   
    # Get the entity based on partition key and row key
    partition_key = "counter"
    row_key = "visit_count"
    entity = table_client.get_entity(partition_key, row_key)

    # Increment the 'number' field
    updated_count = int(entity['number']) + 1
    entity['number'] = str(updated_count)
    
    # Update the entity in the table
    table_client.update_entity(mode="replace", entity=entity)

    #create JSON
    response_data = {"updated_count": updated_count}

    return func.HttpResponse(json.dumps(response_data), mimetype="application/json", status_code=200)
   