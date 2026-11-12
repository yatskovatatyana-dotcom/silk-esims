# Architecture rules

- Keep the tariff administration prototype under `src/admin` and at `/admin`; isolate its styles and state from the public site and mobile application.
- Tariff administration uses session-only sample state until a real authenticated service is connected; never represent its approval or partner synchronization as production operations.
- Normalize supplier costs to the sale currency before calculating margin and comparisons; keep percentage margin distinct from markup.