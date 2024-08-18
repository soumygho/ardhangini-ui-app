import { Box, Card, CardContent, Typography } from "@mui/material";
import { DeliveryAddressEntity } from "../../services/openapi";
import { formatAddress } from "../../util/address-formatter.util";

interface DeliveryAddressProps {
  addressEntity?: DeliveryAddressEntity;
  header: string;
  addressString?: string
}
function DeliveryAddress({ addressEntity, header, addressString }: DeliveryAddressProps) {
  const address = addressEntity ? formatAddress(addressEntity) : addressString;
  return (
    <div className="mt-3">
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <h4>{header}</h4>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {address}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default DeliveryAddress;
